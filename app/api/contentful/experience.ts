import { TypeExperienceSkeleton } from '@/types/contentful'
import { Entry } from 'contentful'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type ExperiencePostEntry = Entry<TypeExperienceSkeleton, undefined, string>

export interface ExperiencePost {
  name: string
  description: string
  logo: ContentImage | null
  level: number
}

export function parseContentfulExperience(experienceEntry?: ExperiencePostEntry): ExperiencePost | null {
  if (!experienceEntry) {
    return null
  }

  return {
    name: experienceEntry.fields.name || '',
    description: experienceEntry.fields.description,
    logo: parseContentfulContentImage(experienceEntry.fields.logo),
    level: experienceEntry.fields.level,
  }
}

interface FetchExperiencePostsOptions {
  preview: boolean
}
export async function fetchExperiencePosts({ preview }: FetchExperiencePostsOptions): Promise<ExperiencePost[]> {
  const contentful = contentfulClient({ preview })
  return contentful
    .getEntries<TypeExperienceSkeleton>({
      content_type: 'experience',
      order: ['fields.level', 'fields.position'],
    })
    .then((experiencePostResults) => {
      return experiencePostResults.items.map(
        (experiencePostEntry) => parseContentfulExperience(experiencePostEntry) as ExperiencePost
      )
    })
    .catch((error) => {
      console.log('error', error)
      return []
    })
}
