export async function sendSMS (message, number) {
  console.log(number)

  const response = await (fetch('https://rest.clicksend.com/v3/sms/send', {
    method: 'POST',
    headers: {
      Authorization: 'Basic Ymlsb3VzMjAyMGtpMTJAc3R1ZGVudC5rYXJhemluLnVhOjNENjc0MkMzLUVBQUQtMTU0Qy0zRkYyLTA2M0FEQzA3Mjk5RQ==',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [
        {
          body: message,
          to: number,
          from: '+380984261902',
        },
      ],
    }),
  }))

  console.log(response.status === 200 ? await response.json() : response);
}
