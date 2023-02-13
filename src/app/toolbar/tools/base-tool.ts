import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ToolDependencies } from "./tool-dependencies";

export abstract class BaseTool {

    protected deps: ToolDependencies;
    public icon: IconDefinition;

    constructor(deps: ToolDependencies) {
        this.deps = deps;
    }

    public abstract execute(e: any): void;
}