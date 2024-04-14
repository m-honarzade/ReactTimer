import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};
const Form = forwardRef(
  ({ onSave, children, ...otherProps }: FormProps, ref) => {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
      return {
        clear() {
          form.current?.reset();
        },
      };
    });
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };
    return (
      <form
        onSubmit={submitHandler}
        {...otherProps}
        ref={form}
        className="w-full flex flex-col gap-1 items-center"
      >
        {children}
      </form>
    );
  }
);

export default Form;
