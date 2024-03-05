const config ={
    VITE_APPWRITE_URL: String(import.meta.env.VITE_APPWRITE_URL),
    VITE_APPWRIRE_PROJECT_ID: String(import.meta.env.VITE_APPWRIRE_PROJECT_ID),
    VITE_APPWRITE_DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    VITE_APPWRIRE_COLLECTION_ID: String(import.meta.env.VITE_APPWRIRE_COLLECTION_ID),
    VITE_APPWRIRE_BUCKET_ID: String(import.meta.env.VITE_APPWRIRE_BUCKET_ID),
    VITE_API_KEY: String(import.meta.env.VITE_API_KEY),
    TINY_MCE_API_KEY: String(import.meta.env.TINY_MCE_API_KEY)
}

export default config
