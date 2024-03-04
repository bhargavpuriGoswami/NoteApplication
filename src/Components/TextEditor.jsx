import React from 'react';
import {Editor} from "@tinymce/tinymce-react";
import { Controller } from 'react-hook-form';


export default function TextEditor({name, control, label, defaultValue=""}){
    return (
        <div className="w-full h-fit my-4">
            {label&& <label className="inline-block mb-1 pl-1">{label}</label>}
            <Controller 
                name={name || "content"}
                control={control}
                render={({field:{onChange}})=>(
                    <Editor 
                        apiKey='ohrcabzovx8jygf37bvl3tsxeqknf5s9lc6zi9k7o7cvga11'
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 400,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                            ],
                            toolbar:
                            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            resize: false
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>    
    )
}