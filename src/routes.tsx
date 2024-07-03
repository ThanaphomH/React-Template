import ScrollToTop from '@/utils/ScrollToTop.ts'
import React from 'react'
import type { LoaderFunction, RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

const pages = import.meta.glob<{
  default: React.ComponentType
  Layout?: React.ComponentType<{ children: React.ReactNode }>
}>('./app/**/page.tsx')

const loaders = import.meta.glob<{ default: LoaderFunction }>(
  './app/**/loader.ts',
  {
    eager: true
  }
)

const errors = import.meta.glob<{ default: React.FunctionComponent }>(
  './app/**/error.tsx',
  {
    eager: true
  }
)

const routes: RouteObject[] = [
  {
    path: '/',
    loader: loaders['./app/loader.ts']?.default,
    ErrorBoundary: errors['./app/error.tsx']?.default,
    lazy: async () => {
      const { default: Component, Layout } =
        // default page
        await pages['./app/page.tsx']()
      if (Layout) {
        return {
          Component: () => (
            <Layout>
              <ScrollToTop />
              <Component />
            </Layout>
          )
        }
      }
      return { Component }
    }
  }
]

Object.keys(pages).forEach((path) => {
  if (Object.prototype.hasOwnProperty.call(pages, path)) {
    const rawRoute = path.match(/\.\/app\/(.*)\/page\.tsx$/)?.[1]
    let route = rawRoute
    if (route) {
      const params = route.match(/\[(\w+)\]/g)
      if (params) {
        params.forEach((param) => {
          route = route?.replace(param, `:${param.slice(1, -1)}`)
        })
      }
      routes.push({
        path: `/${route}`,
        lazy: async () => {
          const { default: Component, Layout } = await pages[path]()
          if (Layout) {
            return {
              Component: () => (
                <Layout>
                  <ScrollToTop />
                  <Component />
                </Layout>
              )
            }
          }
          return { Component }
        },
        loader: loaders[`./app/${rawRoute}/loader.ts`]?.default,
        ErrorBoundary: errors['./app/error.tsx']?.default
      })
    }
  }
})

routes.push({
  path: '/*',
  lazy: async () => {
    const { default: Component, Layout } = await import('@/app/404.tsx')
    if (Layout) {
      return {
        Component: () => (
          <Layout>
            <ScrollToTop />
            <Component />
          </Layout>
        )
      }
    }
    return { Component }
  }
})

export const router = createBrowserRouter(routes)
