import { Display } from "./display";
import { Editor } from "./editor";

export function Body() {
  return (
    <div className="body">
      <Editor />
      <Display />
    </div>
  );
}
