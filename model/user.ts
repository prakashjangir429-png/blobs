import mongoose, { Schema, models, model } from "mongoose";

const pageSchema = new Schema(
  {
    // Page Name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // URL Slug
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Page Type
    type: {
      type: String,
      enum: [
        "home",
        "about",
        "service",
        "contact",
        "blog",
        "landing",
        "privacy-policy",
        "terms",
        "custom",
      ],
      default: "custom",
    },
    seo: {
      title: {
        type: String,
        default: "",
      },

      description: {
        type: String,
        default: "",
      },

      keywords: [
        {
          type: String,
        },
      ],

      ogImage: {
        type: String,
        default: "",
      },
    },
    sections: Schema.Types.Mixed,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    showInNavbar: {
      type: Boolean,
      default: false,
    },
    navbarOrder: {
      type: Number,
      default: 0,
    },
    showInFooter: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const Page = models.Page || model("Page", pageSchema);

export default Page;