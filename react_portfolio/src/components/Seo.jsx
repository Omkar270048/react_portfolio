import { useEffect } from "react"

const SITE_URL = "https://omkarkamat.goignoto.in"
const SITE_NAME = "Omkar Kamat"
const DEFAULT_TITLE = "Omkar Kamat – Python Full Stack Developer"
const DEFAULT_DESCRIPTION =
  "Portfolio of Omkar Kamat, a Python Full Stack Developer building React.js, FastAPI, Django, and PostgreSQL applications, automation pipelines, and scalable web systems."
const DEFAULT_IMAGE = `${SITE_URL}/pic.png`

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement("meta")
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      element.removeAttribute(key)
    } else {
      element.setAttribute(key, value)
    }
  })
  return element
}

function removeMeta(selector) {
  const element = document.head.querySelector(selector)
  if (element) element.remove()
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement("link")
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
  return element
}

function toAbsoluteUrl(url = "/") {
  if (!url) return SITE_URL
  if (/^https?:\/\//i.test(url)) return url
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`
}

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt,
  type = "website",
  locale = "en_IN",
  noindex = false,
  keywords,
  publishedTime,
  modifiedTime,
  jsonLd,
}) {
  useEffect(() => {
    const canonicalUrl = toAbsoluteUrl(path)
    const imageUrl = toAbsoluteUrl(image)
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    const computedImageAlt = imageAlt || fullTitle

    document.title = fullTitle

    upsertMeta('meta[name="description"]', { name: "description", content: description })
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    })

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords })
    } else {
      removeMeta('meta[name="keywords"]')
    }

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl })

    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME })
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: locale })
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description })
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type })
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl })
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: computedImageAlt })

    if (publishedTime) {
      upsertMeta('meta[property="article:published_time"]', {
        property: "article:published_time",
        content: publishedTime,
      })
    } else {
      removeMeta('meta[property="article:published_time"]')
    }

    if (modifiedTime) {
      upsertMeta('meta[property="article:modified_time"]', {
        property: "article:modified_time",
        content: modifiedTime,
      })
    } else {
      removeMeta('meta[property="article:modified_time"]')
    }

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" })
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description })
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl })
    upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: computedImageAlt })

    const scriptId = "seo-jsonld"
    let script = document.getElementById(scriptId)
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script")
        script.id = scriptId
        script.type = "application/ld+json"
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }

    return () => {
      // Keep last-applied SEO tags; route components overwrite them on navigation.
    }
  }, [
    title,
    description,
    path,
    image,
    imageAlt,
    type,
    locale,
    noindex,
    keywords,
    publishedTime,
    modifiedTime,
    jsonLd,
  ])

  return null
}

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION }
