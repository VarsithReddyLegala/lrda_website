"use client";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  QuoteIcon,
  ChatBubbleIcon,
  ListBulletIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { ContentState, Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState, useEffect } from "react";
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from 'draft-js-export-html';
import { Button } from "@/components/ui/button";

type ToolPageProps = {
  text?: string;
};

export default function ToolPage({ text }: ToolPageProps) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (text) {
      const contentState = stateFromHTML(text); // Convert HTML to content state
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
    }
  }, [text]);

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const toggleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const toggleUnderline = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const handleTextAlignLeft = () => {
    // Implement text alignment left
  };

  const handleTextAlignCenter = () => {
    // Implement text alignment center
  };

  const handleTextAlignRight = () => {
    // Implement text alignment right
  };

  const handleQuote = () => {
    // Implement quoting
  };

  const handleChatBubble = () => {
    // Implement chat bubble functionality
  };

  const handleListBullet = () => {
    // Implement bullet list functionality
  };

  const handleInstagramLogo = () => {
    // Implement Instagram logo functionality
  };

  const handleLinkedInLogo = () => {
    // Implement LinkedIn logo functionality
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Tool icons above the NoteComponent */}
      <div className="flex items-center justify-start p-4 bg-gray-200">
        <Button
          onClick={toggleBold}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="Bold"
        >
          <FontBoldIcon />
        </Button>
        <Button
          onClick={toggleItalic}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="Italic"
        >
          <FontItalicIcon />
        </Button>
        <Button
          onClick={toggleUnderline}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="Underline"
        >
          <UnderlineIcon />
        </Button>
        <Button
          onClick={handleTextAlignLeft}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="TextAlignLeft"
        >
          <TextAlignLeftIcon />
        </Button>
        <Button
          onClick={handleTextAlignCenter}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="TextAlignCenter"
        >
          <TextAlignCenterIcon />
        </Button>
        <Button
          onClick={handleTextAlignRight}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="TextAlignRight"
        >
          <TextAlignRightIcon />
        </Button>
        <Button
          onClick={handleQuote}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="Quote"
        >
          <QuoteIcon />
        </Button>
        <Button
          onClick={handleChatBubble}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="ChatBubble"
        >
          <ChatBubbleIcon />
        </Button>
        <Button
          onClick={handleListBullet}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="ListBullet"
        >
          <ListBulletIcon />
        </Button>
        <Button
          onClick={handleInstagramLogo}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="InstagramLogo"
        >
          <InstagramLogoIcon />
        </Button>
        <Button
          onClick={handleLinkedInLogo}
          className="mx-2 w-10 h-10 bg-secondary border-black rounded-full text-black"
          data-testid="LinkedInLogo"
        >
          <LinkedInLogoIcon />
        </Button>
      </div>

      {/* Main content area with NoteComponent */}
      <main className="flex-grow p-6 lg:p-24">
        <div className="max-w-4xl">
            <div className="mt-2 border border-black p-4 rounded-lg w-full bg-white">
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleKeyCommand}
                editorKey="editor"
                placeholder="Start writing your notes here . . ."
                spellCheck={true}
                ariaLabel="Text editor"
                ariaMultiline={true}
              />
            </div>
        </div>
      </main>
    </div>
  );
}

const editorStyles = {
  border: "1px solid black",
  padding: "10px",
  borderRadius: "4px",
  minHeight: "300px",
  width: "800px",
  color: "black",
  backgroundColor: "white",
};




