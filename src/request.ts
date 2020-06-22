export default function request<T>(
  url: string,
  params: StringKeyObj<any> = {},
  files: File[] = []
): Promise<T> {
  const formData = new FormData()
  for (const file of files) {
    formData.append('files', file)
  }
  for (const key of Object.keys(params)) {
    if (params[key] === undefined) continue
    formData.append(key, params[key])
  }
  const option: RequestInit = {
    method: 'POST',
    mode: 'cors',
    body: formData
  }

  return fetch(url, option).then((resp) => resp.json())
}
