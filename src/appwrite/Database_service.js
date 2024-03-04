import conf from '../config/config.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";
import authService from './auth_service.js';

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.VITE_APPWRITE_URL)
        .setProject(conf.VITE_APPWRIRE_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createNote({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRIRE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updateNote(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRIRE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deleteNote(slug){
        try {
            await this.databases.deleteDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRIRE_COLLECTION_ID,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getNote(slug){
        try {
            return await this.databases.getDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRIRE_COLLECTION_ID,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getAllNotes(author){
        try {
            return await this.databases.listDocuments(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRIRE_COLLECTION_ID,
                [
                    Query.equal("status", "active"),
                    Query.equal("userID", author)
                ]
                
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.VITE_APPWRIRE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.VITE_APPWRIRE_BUCKET_ID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    async getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.VITE_APPWRIRE_BUCKET_ID,
            fileId
        )
    }
}


const service = new Service()
export default service