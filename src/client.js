// this is what talks to sanity

import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "ynxx5tsz",
    dataset: "production"
})