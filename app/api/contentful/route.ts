import { NextRequest } from 'next/server'
import { fetchExperiencePosts } from '@/app/api/contentful/experience'
import { fetchSoftSkills } from '@/app/api/contentful/softskills'

enum AvailableModels {
  EXPERIENCE = 'experience',
  SKILLS = 'softSkills',
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const model = searchParams.get('model')
  console.log('Retrieving model', model)
  switch (model) {
    case AvailableModels.EXPERIENCE:
      return fetchExperiencePosts({ preview: false }).then((data) => {
        return new Response(JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      })
    case AvailableModels.SKILLS:
      return fetchSoftSkills({ preview: false }).then((data) => {
        return new Response(JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      })
    default:
      console.log('Model not found')
      return new Response(JSON.stringify({ error: 'Model not found' }), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
  }
}
