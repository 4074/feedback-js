async function upload<T>(
  url: string,
  files: File[],
  params: StringKeyObj<any> = {}
): Promise<T> {
  const formData = new FormData()
  for (const file of files) {
    formData.append('files', file)
  }
  for (const key of Object.keys(params)) {
    formData.append(key, params[key])
  }
  const option: RequestInit = {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    body: formData
  }

  return fetch(url, option).then((resp) => resp.json())
}

export default {
  upload
}
