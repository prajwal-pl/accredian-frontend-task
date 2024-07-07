import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  id: string;
};

const ReferalModal = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    toName: "",
    toMail: "",
    fromName: "",
    fromMail: "",
    body: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = axios
      .post("http://localhost:8000/api/sendMail", input)
      .then(() => {
        setInput({
          toName: "",
          toMail: "",
          fromName: "",
          fromMail: "",
          body: "",
        });
        toast.success("Referral sent successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  return (
    <dialog id={id} className="modal">
      <div className="modal-box bg-white">
        <h3 className="font-bold text-center text-lg">Refer a Friend!</h3>
        <form method="dialog" action="">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="fromName">Your Name</label>
            <input
              className="input input-bordered w-full bg-inherit"
              type="text"
              placeholder="Your Name"
              id="fromName"
              name="fromName"
              value={input.fromName}
              onChange={(e) => setInput({ ...input, fromName: e.target.value })}
            />
          </div>
          <label htmlFor="fromMail">Your Email</label>
          <input
            placeholder="Your Email"
            className="input input-bordered w-full  bg-inherit"
            type="email"
            id="fromMail"
            name="fromMail"
            value={input.fromMail}
            onChange={(e) => setInput({ ...input, fromMail: e.target.value })}
          />
          <label htmlFor="toName">Recipient Name</label>
          <input
            placeholder="Recipient Name"
            className="input input-bordered w-full  bg-inherit"
            type="text"
            id="toName"
            name="toName"
            value={input.toName}
            onChange={(e) => setInput({ ...input, toName: e.target.value })}
          />
          <label htmlFor="toMail">Recipient Email</label>
          <input
            placeholder="Recipient Email"
            className="input input-bordered w-full  bg-inherit"
            type="email"
            id="toMail"
            name="toMail"
            value={input.toMail}
            onChange={(e) => setInput({ ...input, toMail: e.target.value })}
          />
          <label htmlFor="body">Message</label>
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered w-full  bg-inherit"
            id="body"
            name="body"
            value={input.body}
            onChange={(e) => setInput({ ...input, body: e.target.value })}
          />
          <button
            type="submit"
            className="btn border-none bg-blue-500 text-white"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default ReferalModal;
