/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ProfileUpdateForm from "./forms/ProfileUpdateForm";
import PasswordChangeForm from "./forms/PasswordChangeForm";

export default function ProfileForm() {
  return (
    <div className="gradient-wrapper mb--sm">
      <div className="gradient-title">
        <h2>Your profile information</h2>
      </div>
      <div className="gradient-padding">
        <ProfileUpdateForm />
        <hr />

        {/* Password Change Form */}
        <PasswordChangeForm />
      </div>
    </div>
  );
}
