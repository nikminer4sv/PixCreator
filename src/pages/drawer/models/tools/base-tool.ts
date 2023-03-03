import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export abstract class BaseTool {

    public icon: IconDefinition;
    public shortcut: string;
    public description: string;

    public abstract execute(e: MouseEvent): void;

}
