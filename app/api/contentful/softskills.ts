import { TypeSoftSkillsSkeleton } from '../../../types/contentful'
import { Entry } from 'contentful'
import contentfulClient from './contentfulClient'

type SoftSkillEntry = Entry<TypeSoftSkillsSkeleton, undefined, string>

export interface SoftSkillValue {
  skill: string
  position: number
}

export function parseContentfulSoftSkill(skillEntry?: SoftSkillEntry): SoftSkillValue | null {
  if (!skillEntry) {
    return null
  }

  return {
    skill: skillEntry.fields.skill,
    position: skillEntry.fields.position,
  }
}

interface FetchSoftSkillsOptions {
  preview: boolean
}
export async function fetchSoftSkills({ preview }: FetchSoftSkillsOptions): Promise<SoftSkillValue[]> {
  const contentful = contentfulClient({ preview })

  const softSkillResults = await contentful.getEntries<TypeSoftSkillsSkeleton>({
    content_type: 'softSkills',
    order: ['fields.position'],
  })
  return softSkillResults.items.map((skillEntry) => parseContentfulSoftSkill(skillEntry) as SoftSkillValue)
}
