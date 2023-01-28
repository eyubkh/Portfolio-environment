import styled from "styled-components"
import useProcessContext from "@utils/useProcessContext"
import useWindowContext from "@utils/useWindowContext"
import { Black100, Grey200 } from "@utils/tokens"
import { ProcessActionOptions } from "types/lib/processTypes"

const WindowMinimizeComponent = styled.div`
  position: relative;
  height: 18px;
  width: 18px;
  border-left: 1px solid ${Black100};
  background-color: ${Grey200};
  cursor: pointer;

  :after {
    content: '';
    position: absolute;
    height: 1px;
    width: 1px;
    background-color: ${Black100};
    top: 50%; 
    left: 50%;
    transform: translateY(calc(-50% - 1.5px)) translateX(calc(-50% - 3px));
    box-shadow: 
    1px 0px ${Black100},
    2px 0px ${Black100},
    3px 0px ${Black100},
    4px 0px ${Black100},
    5px 0px ${Black100},
    6px 0px ${Black100},

    1px 1px ${Black100},
    2px 1px ${Black100},
    3px 1px ${Black100},
    4px 1px ${Black100},
    5px 1px ${Black100},

    2px 2px ${Black100},
    3px 2px ${Black100},
    4px 2px ${Black100},
    
    3px 3px ${Black100}
    ;
  }
`

export const WindowMinimize = (): JSX.Element => {
  const { state: windowState } = useWindowContext()
  const { dispatch: processDispatch } = useProcessContext()

  const handlerOnClickMinimize = (event: any) => {
    event.preventDefault()

    const el = document.getElementById(windowState.id)
    if (el) {
      el.style.display = 'none'
    }

    const metaData = {
      id: windowState.id,
      icon: windowState.icon,
      title: windowState.title
    }

    processDispatch({
      type: ProcessActionOptions.ICON_PROCESSES,
      payload: {
        [windowState.title]: metaData
      }
    })
  }
  return <WindowMinimizeComponent onClick={handlerOnClickMinimize} />
}