import React, { useEffect, useRef, useState } from 'react';

import { DosPlayer as Instance, type DosPlayerFactoryType } from 'js-dos';

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
    width: number;
    height: number;
    bundleUrl: string;
}

export default function DosPlayer(props: PlayerProps) {
    const rootRef = useRef<HTMLDivElement>(null);

    const [dos, setDos] = useState<Instance | null>(null);
    const didInitRef = useRef(false);


    useEffect(() => {
        if (didInitRef.current) return;
        didInitRef.current = true;

        if (rootRef === null || rootRef.current === null) {
            return;
        }

        const root = rootRef.current as HTMLDivElement;
        const instance = Dos(root);
        setDos(instance);
        const elements = rootRef.current.getElementsByClassName('flex-grow-0');
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute("style", "display:none")
        }
        // while (elements.length > 0) {
        //     elements[0].remove();
        // }

        return () => {
            instance.stop();
        };
    }, [rootRef]);


    useEffect(() => {
        if (dos !== null) {
            dos.run(props.bundleUrl)
        }

        return () => {
            if (dos !== null) {
                dos.stop();
            }
        };
    }, [dos, props.bundleUrl]);
    return (
        <div
            ref={rootRef}
            style={{
                width: props.width,
                height: props.height,
                position: 'absolute',
            }}
        ></div>
    );
}
