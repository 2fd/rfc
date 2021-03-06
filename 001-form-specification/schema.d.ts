// @flow
/**
 * This is the root document object
 */
export interface FormSpecification {
    /**
     * A title for the form.
     */
    title?: string;

    /**
     * A description for the form. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    description?: string;

    /**
     * A relevant note that the third-party want to communicate to de the user. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    hint?: string;
    
    /**
     * An warning that the third-party want to communicate to de the user, but that does not prevent submit the form data. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    warning?: string;
    
    /**
     * An error that prevents sending the form. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    error?: string;

    /**
     * A list of sections for the form
     */
    sections: Section[];

    /**
     * A list of validation that allow to the third-party to modify the form based on data completed by the user
     */
    validations?: Validation[];
}

/**
 * This object define each section on the form
 */
export interface Section {

    /**
     * Name for the section. It is **NOT REQUIRED** but there **SHOULD NOT** be two sections with the same
     */
    name?: string;

    /**
     * A title for the section.
     */
    title?: string;

    /**
     * A description for the section. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    description?: string;

    /**
     * A relevant note that the third-party want to communicate to de the user. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    hint?: string;

    /**
     * An warning that the third-party want to communicate to de the user, but that does not prevent submit the form data. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    warning?: string;

    /**
     * An error that prevents sending the form. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    error?: string;

    /**
     * Defines if the section is visible.
     */
    hidden?: boolean;

    /**
     * Defines if the section is visible depending on the data loaded by the user *(it is ignored if hidden is true)*
     */
    hiddenWhere?: any;

    /**
     * Defines if the section is disabled.
     */
    disabled?: boolean;

    /**
     * Defines if the section is disabled depending on the data loaded by the user *(it is ignored if disabled is true)*.
     */
    disabledWhere?: any;

    /**
     * A list of inputs that appear in the section of the form.
     */
    inputs?: Input[];
}

/**
 * This object define each input for a section
 */
export interface Input {

    /**
     * **REQUIRED** Name for the input and represents the position in the data by dot notation
     */
    name: string;

    /**
     * **REQUIRED** It is a string that is defined by the service and represents the data type that will be sent in as data.
     */
    type: string;

    /**
     * Reference for the user.
     */
    label: string;

    /**
     * A relevant note that the third-party want to communicate to de the user.
     */
    hint?: string;

    /**
     * An warning that the third-party want to communicate to de the user, but that does not prevent submit the form data.
     */
    warning?: string;

    /**
     * An error that prevents sending the form.
     */
    error?: string;

    /**
     * Defines if the section is visible.
     */
    hidden?: boolean;

    /**
     * Defines if the section is visible depending on the data loaded by the user *(it is ignored if hidden is true)*.
     */
    hiddenWhere?: any;

    /**
     * Defines if the section is disabled.
     */
    disabled?: boolean;

    /**
     * Defines if the section is disabled depending on the data loaded by the user *(it is ignored if disabled is true)*.
     */
    disabledWhere?: any;

    /**
     * An object that is defined by the service and that the third-party can use to configure the behavior of the input.
     */
    customProps?: any;
}

/**
 * This object allows you to apply changes to a named component or Form Object based on the information submitted by the user
 */
export interface Validation {

    /**
     * Object used to define when I should apply the changes.
     */
    where?: any;

    /**
     * A list of changes.
     */
    changes?: Change[];
}

/**
 * This object allows you to apply changes to a named component or Form Object based on the information submitted by the user.
 */
export interface Change {

    /**
     * The name of the input or the section to which the change will be applied.
     */
    name?: string;

    /**
     * Message that will replace the initial `hint` of the section or the input.
     */
    hint?: string;
    
    /**
     * Message that will replace the initial `warning` of the section or the input.
     */
    warning?: string;
    
    /**
     * Message that will replace the initial `error` of the section or the input.
     */
    error?: string;

    /**
     * Object to be merged the initial `customProps` of the section or input.
     */
    customProps?: any;
}
