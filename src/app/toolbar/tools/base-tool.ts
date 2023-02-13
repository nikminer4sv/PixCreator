import { ToolDependencies } from "./tool-dependencies";

export abstract class BaseTool {

    public title: string;

    protected deps: ToolDependencies;

    constructor(deps: ToolDependencies) {
        this.deps = deps;
    }

    public abstract execute(e: any): void;
}