const SoundList = (props: { title: string, soundList: string[] }) => {
    return (
        <details open>
            <summary>{props.title}</summary>
            {
                props.soundList.map((filename) => {
                    return <fieldset>
                        <legend>{filename}</legend>
                        <audio controls src={`sound/${filename}`} />
                    </fieldset>
                })
            }
        </details>
    )
}

export default SoundList