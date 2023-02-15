import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ToolDependencies } from "./tool-dependencies";

export abstract class BaseTool {

    protected deps: ToolDependencies;
    public icon: IconDefinition;
    public shortcut: string;

    constructor(deps: ToolDependencies) {
        this.deps = deps;
    }

    public abstract execute(e: MouseEvent): void;
}