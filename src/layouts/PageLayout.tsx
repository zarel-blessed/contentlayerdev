import type { FC } from 'react'

import { Layout } from '../components/Layout'
import type * as types from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Playground } from '../components/LandingPage/Playground'

const mdxComponents = { Playground }

// NOTE this is currently not used and should possibly be removed in the future
export const PageLayout: FC<{ page: types.Page }> = ({ page }) => {
  const MDXContent = useMDXComponent(page.body.code)
  return (
    <Layout doc={page}>
      <div className="justify-center max-w-2xl py-8 mx-auto markdown">
        <h1>{page.title}</h1>
        <MDXContent components={mdxComponents} />
      </div>
    </Layout>
  )
}
