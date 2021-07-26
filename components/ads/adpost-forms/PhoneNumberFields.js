import { useFieldArray } from "react-hook-form";
import { Form, InputGroup } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function PhoneNumberFields({
  control,
  register,
  errors,
  loading,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ad_phone_numbers",
  });

  return (
    <div>
      {fields.map((item, idx) => (
        <Form.Group key={item.id}>
          <Form.Label>Phone Number {idx + 1}:</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              name={`ad_phone_numbers[${idx}].phone`}
              placeholder="Enter phone number"
              ref={register({
                required: idx === 0 ? true : false,
                pattern: /^(?:\+88|01)?(?:\d{11}|\d{13})$/,
              })}
              isInvalid={!!errors[`ad_phone_numbers[${idx}].phone`]}
              defaultValue={item?.phone || ""}
              disabled={loading}
            />
            <InputGroup.Append>
              <InputGroup.Text as="a">
                <FaTimes color="red" onClick={() => remove(idx)} />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Form.Control.Feedback type="invalid">
            <p>Enter valid phone number</p>
          </Form.Control.Feedback>
        </Form.Group>
      ))}

      {fields && fields.length < 3 && (
        <Form.Group>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => append()}
          >
            <FaPlus /> Add Phone
          </button>
        </Form.Group>
      )}
    </div>
  );
}
