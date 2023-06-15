import * as React from 'react'

export default function Google({ schema }) {
    // Stringify the schema object (adding the "null, 2" gives you readable json)
    const schemaAsString = JSON.stringify(schema, null, 2)
    return (
        <script type="application/ld+json">
            {schemaAsString}
        </script>
    )
}
