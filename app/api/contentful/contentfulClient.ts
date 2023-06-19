import { createClient } from 'contentful'

const space = 'sd1qrhd4pml8'
//remove any ' or " from the string
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || ''
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || ''

if (!space) {
  throw new Error('CONTENTFUL_SPACE_ID is missing')
}

// This is the standard Contentful client. It fetches
// content that has been published.
const client = createClient({
  space: space,
  accessToken: accessToken.replace(/['"]+/g, ''),
  host: 'cdn.contentful.com',
})

// This is a Contentful client that's been configured
// to fetch drafts and unpublished content.
const previewClient = createClient({
  space: space,
  accessToken: previewAccessToken.replace(/['"]+/g, ''),
  host: 'preview.contentful.com',
})

// This little helper will let us switch between the two
// clients easily:
export default function contentfulClient({ preview = false }) {
  if (preview) {
    if (!previewAccessToken) {
      throw new Error('CONTENTFUL_PREVIEW_ACCESS_TOKEN is missing')
    }
    return previewClient
  }
  if (!accessToken) {
    throw new Error('CONTENTFUL_ACCESS_TOKEN is missing')
  }
  console.log(client)
  console.log(space, accessToken)
  return client
}
