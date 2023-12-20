"use client";
import React, { useState, useEffect } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import { Input } from "@/components/ui/input";
import { Underline } from "@tiptap/extension-underline";
import { Note } from "@/app/types";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TimePicker from "./time_picker";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";
import History from "@tiptap/extension-history";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import ToolBar from "./toolbar";
import TagManager from "./tag_manager";

type NoteEditorProps = {
  note?: Note;
};

export default function NoteEditor({ note }: NoteEditorProps) {
  const [title, setTitle] = useState(note?.title || "");
  const [images, setImages] = useState<any>();
  const [tags, setTags] = useState<string[] | undefined>(note?.tags);
  const [time, setTime] = useState<Date | undefined>();
  const [longitude, setLongitude] = useState<string | undefined>();
  const [latitude, setLatitude] = useState<string | undefined>();

  const editor = useEditor({
    extensions: [
      Document,
      Bold,
      Italic,
      History,
      Paragraph,
      Text,
      Underline,
      OrderedList,
      ListItem.configure({
        HTMLAttributes: {
          class: "pl-4 border-l border-l-[value]",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "pl-4 border-l border-l-[value]",
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          className: "border-l-6 border-tan bg-tan bg-opacity-[0.5] pl-4",
        },
      }),
    ],
    content: note?.text || "<p>Type your text...</p>",
  });

  console.log(note?.tags);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setImages(note.media);
      setTime(note.time);
      setLongitude(note.longitude);
      setLatitude(note.latitude);
      setTags(note.tags);
      if (editor) {
        editor.commands.setContent(note.text);
      }
    }
  }, [note, editor]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen">
      <Input
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
        className="m-4"
      />
      <main className="flex-grow p-6">
        <div className="flex-grow flex-row">
          <TimePicker initialDate={time || new Date()} />
          <TagManager inputTags={tags} />
        </div>
        <div className="overflow-auto">
          <ToolBar editor={editor} />
          <div className="mt-2 border border-black p-4 rounded-lg bg-white">
            <EditorContent editor={editor} />
          </div>
        </div>
      </main>
    </div>
  );
}
