import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> &{ 
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
    href?: string;
};

// helper function to determine if props are of type AnchorProps
function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {

    if (isAnchorProp(props)) {
        return <a className="button" {...props}></a>;
    }

 
  return <button className="button" {...props}></button>;
}
