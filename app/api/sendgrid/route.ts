import mail from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

// Create an api key in sendgrid and store someplace safe
mail.setApiKey(process.env.SENDGRID_API_KEY || '')

type ResponseData = {
  success?: boolean
  message?: string
}

function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export async function POST(request: NextRequest) {
  let response: ResponseData = {}
  const body = await request.json()
  if (!body.name || !body.email || !body.message) {
    response = {
      success: false,
      message: 'Please fill out all fields.',
    }
    return NextResponse.json(response)
  }
  if (!validateEmail(body.email)) {
    response = {
      success: false,
      message: 'Please enter a valid email address.',
    }
    return NextResponse.json(response)
  }
  const contactEmail = process.env.CONTACT_EMAIL || ''
  const data = {
    to: contactEmail,
    from: contactEmail,
    templateId: 'd-bb2fbe2ce5164bee9e7f4d653b3a9621',
    dynamicTemplateData: {
      contact_name: body.name,
      contact_email: body.email,
      contact_message: body.message,
    },
  }

  // Send the data and create a response object. I'm using status and message to display a success or fail notification in the UI
  await mail
    .send(data)
    .then(() => {
      response = {
        success: true,
        message: "Your message was sent. I'll be in contact shortly.",
      }
    })
    .catch((error) => {
      response = {
        success: false,
        message: `Message failed to send with error, ${error}`,
      }
    })

  return NextResponse.json(response)
}
