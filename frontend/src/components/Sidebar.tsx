import AssistantIcon from '@mui/icons-material/Assistant';

import "./Sidebar.css";

export default function Sidebar(props: {
  models: Array<{ name: string; displayName: string }>;
  selectedModel: string;
  onSelectModel: any;
  setOpenAIKey: any;
  openAIKey: string;
}) {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
            <AssistantIcon /> GPT-Code UI

            <div className='github'>
                <a href='https://github.com/huqianghui/GPT-Code-Interpreter'>Open Source - v{import.meta.env.VITE_APP_VERSION}</a>
            </div>
        </div>
        <div className="settings">
            <label className="header">Settings</label>
            <label>Model</label>
            <select
            value={props.selectedModel}
            onChange={(event) => props.onSelectModel(event.target.value)}
            >
            {props.models.map((model, index) => {
                return (
                <option key={index} value={model.name}>
                    {model.displayName}
                </option>
                );
            })}
            </select>
        </div>
      </div>
    </>
  );
}
