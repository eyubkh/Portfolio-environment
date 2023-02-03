import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { aboutMe } from "@utils/data"
import { useEffect, useState } from "react"
import { fetchingMarkDown } from "@utils/fetchingMarkDown"

export const AboutMe = (): JSX.Element => {
  const { title, icon, url } = data[aboutMe]
  const [readme, setReadme] = useState<any | null>(null)
  useEffect(() => {
    (async function () {
      const response = await fetchingMarkDown(url)
      setReadme(response)
    })()
  }, [])

  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      >
        {readme}
      </Window>
    </WindowProvider>
  )
}