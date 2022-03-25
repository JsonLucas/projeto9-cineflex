function AvaibleSessions({days}) {
    return (
        <>
            {days.weekday?.map((item) => (
                <div>{item}</div>
            ))}
        </>);
}

export default AvaibleSessions;