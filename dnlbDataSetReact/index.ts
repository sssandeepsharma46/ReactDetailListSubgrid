import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { dnlbDataSet, IdnlbDataSet } from "./dataSetReact";
import * as React from "react";

export class dnlbDataSetReact implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;

    constructor() {
        // Empty constructor
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const dataset = context.parameters.dnlbDataSetReact; // No need for unnecessary type assertion

        const props: IdnlbDataSet = {
            name: 'dotNetLittleBoy',
            dataset: dataset
        };

        return React.createElement(dnlbDataSet, { ...props, key: dataset?.sortedRecordIds?.join(",") });
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Cleanup if necessary
    }
}

export default dnlbDataSetReact;
