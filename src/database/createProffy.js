module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    
    // Inserir dados na tabela de Proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    // Inserir dados na tabela Classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            custo,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.custo}",
            "${proffy_id}"
        );   
    `)

    const class_id = insertedClass.lastID

    // Inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    // Executar os db.run
    await Promise.all(insertedAllClassScheduleValues);
}