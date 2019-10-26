import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
  author,
  route,
  image,
}) => {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={
        title === 'Lazy Fonts'
          ? `${title}`
          : `${title} | Lazy Fonts`
      }
      meta={[
        { name: `description`, content: description },
        { property: `og:title`, content: title },
        { property: `og:url`, content: `https://lazyfonts.com${route}` },
        { property: `og:image`, content: image },
        { property: `og:description`, content: description },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: author },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
      ]
        .concat(
          keywords.length > 0
            ? { name: `keywords`, content: keywords.join(', ') }
            : [],
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [
    'who is my representative',
    'us representatives',
    'contact representatives',
    'who is my congressman',
    'us senators',
    'contact the president',
  ],
  description: `Get custom and fancy fonts on your website super fast.`,
  author: `Kyle Melton & Wade Harned`,
  title: `Lazy Fonts`,
  route: `/`,
  image: 'url/to/an/image',
}
// TODO: replace image default with a real image url

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  route: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
