import {useEffect, useRef} from 'react'
import isEqual from 'lodash/isEqual'
export function useDeepEffect(effectFunc, props) {
    const isFirst = useRef(true)
    const prevProps = useRef(props)
    
    useEffect(()=>{
        const isSame = prevProps.current.every((obj, index)=>isEqual(obj, props[index]))
        if(isFirst.current || !isSame){
            effectFunc();
        }
        isFirst.current = false
        prevProps.current = props
    })
}
