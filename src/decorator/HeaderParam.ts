import {defaultMetadataArgsStorage} from "../metadata-builder/MetadataArgsStorage";
import {ParamOptions} from "../decorator-options/ParamOptions";

/**
 * Injects a request's http header value to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export function HeaderParam(name: string, options?: ParamOptions): Function {
    return function (object: Object, methodName: string, index: number) {
        defaultMetadataArgsStorage.params.push({
            type: "header",
            object: object,
            method: methodName,
            index: index,
            name: name,
            parse: options ? options.parse : false,
            required: options ? options.required : false,
            classTransform: options ? options.transform : undefined,
            validate: options ? options.validate : undefined
        });
    };
}