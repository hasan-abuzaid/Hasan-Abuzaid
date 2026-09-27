/* @ds-bundle: {"format":3,"namespace":"HasanAbuzaidPortfolioDesignSystem_4b31b8","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"VideoFacade","sourcePath":"components/media/VideoFacade.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProjectCard","sourcePath":"components/surfaces/ProjectCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"e5182f9f5b7d","components/core/Eyebrow.jsx":"49aff14beb60","components/core/IconButton.jsx":"69431a66da07","components/core/Stat.jsx":"de8fc4868e80","components/core/Tag.jsx":"f26e83ed33e6","components/media/VideoFacade.jsx":"35d44ee0e46b","components/navigation/NavBar.jsx":"145e379c2ddd","components/surfaces/Card.jsx":"59b1b2638837","components/surfaces/ProjectCard.jsx":"e9a462884ae4","kit.jsx":"1400729ee47b","ui_kits/portfolio/Contact.jsx":"fd752f607c37","ui_kits/portfolio/Engineering.jsx":"41c1a91e9b28","ui_kits/portfolio/Landing.jsx":"9a1a31724cd8","ui_kits/portfolio/Leadership.jsx":"d4eb2d7af107","ui_kits/portfolio/Videography.jsx":"ecbb698ff8a1","ui_kits/portfolio/kit.jsx":"4006db1a2122","ui_kits/portfolio/shell.jsx":"b294b1b62f28","ui_kits/portfolio/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HasanAbuzaidPortfolioDesignSystem_4b31b8 = window.HasanAbuzaidPortfolioDesignSystem_4b31b8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action primitive.
 * Variants: primary (slate-blue fill), secondary (hairline), ghost (text-only
 * with hover surface), link (inline underline-on-hover). Soft glow on hover for
 * primary. Never pill-shaped — soft 6px radius.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  iconLeft,
  iconRight,
  disabled = false,
  full = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      font: '500 13px/1 var(--font-body)',
      gap: 8,
      icon: 15
    },
    md: {
      padding: '11px 20px',
      font: '500 14px/1 var(--font-body)',
      gap: 9,
      icon: 17
    },
    lg: {
      padding: '15px 28px',
      font: '500 16px/1 var(--font-body)',
      gap: 10,
      icon: 19
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    font: s.font,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.45 : 1,
    boxSizing: 'border-box'
  };
  const variants = {
    primary: {
      background: 'var(--accent-600)',
      color: 'var(--text-on-accent)',
      borderColor: 'var(--accent-600)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      borderColor: 'transparent'
    },
    link: {
      background: 'transparent',
      color: 'var(--text-accent)',
      borderColor: 'transparent',
      padding: 0,
      borderRadius: 0
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = !disabled && hover ? {
    primary: {
      background: 'var(--accent-500)',
      borderColor: 'var(--accent-500)',
      boxShadow: 'var(--glow-hover)'
    },
    secondary: {
      borderColor: 'var(--accent-600)',
      color: 'var(--text-strong)',
      boxShadow: 'var(--glow-soft)'
    },
    ghost: {
      background: 'var(--surface-hover)',
      color: 'var(--text-primary)'
    },
    link: {
      color: 'var(--accent-400)'
    }
  }[variant] : {};
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyles,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-disabled": disabled || undefined
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    },
    "aria-hidden": "true"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    },
    "aria-hidden": "true"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — uppercase, wide-tracked overline label that sits above
 * section titles. Optional leading index (e.g. "01"). Muted slate.
 */
function Eyebrow({
  children,
  index,
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: '500 12px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: accent ? 'var(--text-accent)' : 'var(--text-muted)',
      ...style
    }
  }, rest), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-600)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, index) : null, index ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: 'var(--border-strong)'
    },
    "aria-hidden": "true"
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control. Used for nav toggles, social
 * links, gallery controls. Hairline by default, soft glow on hover.
 */
function IconButton({
  children,
  label,
  size = 'md',
  variant = 'ghost',
  href,
  style,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const icon = {
    sm: 16,
    md: 18,
    lg: 20
  }[size] || 18;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--text-secondary)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-secondary)'
    }
  };
  const hoverStyle = {
    ghost: {
      background: 'var(--surface-hover)',
      color: 'var(--text-primary)'
    },
    outline: {
      borderColor: 'var(--accent-600)',
      color: 'var(--text-strong)',
      boxShadow: 'var(--glow-soft)'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...(hover ? hoverStyle : {}),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: icon,
      height: icon
    },
    "aria-hidden": "true"
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a single figure + label, for the landing "snapshot" strip and
 * videography reach numbers. Display font for the number, muted label.
 */
function Stat({
  value,
  label,
  sub,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-3xl)/1 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: '500 12px/1.3 var(--font-body)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-body-sm)',
      color: 'var(--text-faint)'
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small pill chip for technologies, skills, categories.
 * Quiet by default (faint surface + hairline); accent variant for
 * the one thing worth emphasizing.
 */
function Tag({
  children,
  variant = 'default',
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '3px 9px',
      font: '500 11px/1.4 var(--font-body)'
    },
    md: {
      padding: '5px 12px',
      font: '500 12px/1.4 var(--font-body)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    default: {
      background: 'var(--surface-raised)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-hairline)'
    },
    accent: {
      background: 'var(--accent-tint)',
      color: 'var(--accent-400)',
      border: '1px solid var(--accent-tint-2)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'var(--radius-pill)',
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      ...s,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/media/VideoFacade.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VideoFacade — lightweight YouTube embed. Shows the thumbnail + a play
 * button first (fast), then swaps in the real iframe player on click.
 * Cinematic dark treatment, accent glow on hover. Set `ratio="9 / 16"` for
 * vertical reels / shorts.
 *
 * Hover is driven by native CSS :hover (see .video-facade in the global
 * stylesheet) so the browser always clears the accent glow the instant the
 * pointer leaves — no stranded / held glow. box-shadow is NOT transitioned, so
 * the glow never lingers on the way out. When playing, the `is-playing` class
 * suppresses all hover affordances.
 */
function VideoFacade({
  videoId,
  title = 'Video',
  thumb,
  ratio = '16 / 9',
  style,
  ...rest
}) {
  const [playing, setPlaying] = React.useState(false);
  const poster = thumb || (videoId ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` : undefined);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'video-facade' + (playing ? ' is-playing' : ''),
    onClick: () => !playing && setPlaying(true),
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      overflow: 'hidden',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-sunken)',
      cursor: playing ? 'default' : 'pointer',
      transition: 'border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), playing ? /*#__PURE__*/React.createElement("iframe", {
    src: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`,
    title: title,
    allow: "accelerated-sensors; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      border: 0
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, poster ? /*#__PURE__*/React.createElement("img", {
    className: "video-facade__poster",
    src: poster,
    alt: title,
    loading: "lazy",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(0.92) brightness(0.92)',
      transition: 'filter var(--dur-base) var(--ease-out)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,12,16,0.1) 0%, rgba(10,12,16,0.55) 100%)'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "video-facade__play",
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 64,
      height: 64,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10,12,16,0.55)',
      border: '1px solid',
      borderColor: 'rgba(231,235,240,0.4)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      boxShadow: 'none',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "video-facade__tri",
    style: {
      width: 0,
      height: 0,
      marginLeft: 4,
      borderLeft: '16px solid',
      borderLeftColor: 'var(--text-strong)',
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      transition: 'border-left-color var(--dur-base) var(--ease-out)'
    },
    "aria-hidden": "true"
  })), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      right: 16,
      font: '500 14px/1.3 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, title) : null));
}
Object.assign(__ds_scope, { VideoFacade });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/VideoFacade.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavBar — the global top bar. Name logotype at left (display font),
 * section tabs at right. Transparent over the hero, solidifies (blurred
 * surface + hairline bottom border) once `scrolled` is true.
 * Tab order is fixed by the brand: Engineering · Videography · Leadership · Contact.
 */
function NavBar({
  brand = 'Hasan',
  items = ['Engineering', 'Videography', 'Leadership', 'Contact'],
  active,
  scrolled = false,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter-lg)',
      background: scrolled ? 'rgba(10,12,16,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-nav)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-nav)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-hairline)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), backdrop-filter var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('Home');
    },
    style: {
      font: '600 21px/1 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      textDecoration: 'none'
    }
  }, brand, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-600)'
    }
  }, ".")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: `#${item.toLowerCase()}`,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(item);
      },
      style: {
        position: 'relative',
        padding: '8px 14px',
        font: '500 14px/1 var(--font-body)',
        letterSpacing: '0.01em',
        color: isActive ? 'var(--text-strong)' : 'var(--text-muted)',
        textDecoration: 'none',
        borderRadius: 'var(--radius-sm)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, item, isActive ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 14,
        right: 14,
        bottom: 0,
        height: 1.5,
        background: 'var(--accent-600)',
        boxShadow: '0 0 8px var(--accent-glow)'
      },
      "aria-hidden": "true"
    }) : null);
  })));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the flat, hairline surface primitive. NO heavy drop shadow.
 * Border + optional hover glow only. The whole brand's anti-"AI-slop"
 * card: 1px border, soft 8px radius, accent glow on hover when interactive.
 */
function Card({
  children,
  interactive = false,
  padding = 24,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding,
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...(interactive && hover ? {
        borderColor: 'var(--accent-600)',
        boxShadow: 'var(--glow-soft)',
        transform: 'translateY(-2px)'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — the engineering work card. Flat hairline surface, title +
 * description, a row of tech Tags, and a link-out action ("View on GitHub" /
 * "Visit site"). Hover lifts with an accent glow and reveals the arrow.
 */
function ProjectCard({
  title,
  description,
  tags = [],
  href = '#',
  action = 'View on GitHub',
  index,
  style,
  ...rest
}) {
  // Hover is driven by native CSS :hover (see .project-card in the global
  // stylesheet) so the browser always clears the glow the instant the pointer
  // leaves — no stranded/held glow. box-shadow is NOT transitioned, so the glow
  // never lingers on the way out.
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "project-card",
    href: href,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      transition: 'border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '500 var(--text-lg)/1.25 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)'
    }
  }, title), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-display)',
      color: 'var(--text-faint)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, index) : null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: 'var(--type-body-sm)',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, description), tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      marginTop: 18
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    size: "sm"
  }, t))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 20,
      font: '500 13px/1 var(--font-body)',
      color: 'var(--text-accent)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    },
    className: "project-card__action"
  }, action, /*#__PURE__*/React.createElement("span", {
    className: "project-card__arrow",
    style: {
      display: 'inline-block',
      transition: 'transform var(--dur-base) var(--ease-out)'
    },
    "aria-hidden": "true"
  }, "\u2197")));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Shared building blocks for the Hasan Abuzaid portfolio UI kit.
// All real product surfaces compose these + the design-system components.

/* PhotoSlot — elegant placeholder for user-supplied imagery. Shows a labelled
   slot with the brief's [[PLACEHOLDER]] token so assets can be dropped in.
   The brand has no shipped photography yet, so the kit renders these. */
function PhotoSlot({
  token,
  label,
  ratio = '4 / 3',
  icon = 'image',
  rounded = 'var(--radius-md)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      borderRadius: rounded,
      border: '1px dashed var(--border-strong)',
      background: 'linear-gradient(135deg, var(--ink-750), var(--ink-800))',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--aurora)',
      opacity: 0.5
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22,
      color: 'var(--text-faint)',
      position: 'relative'
    }
  }), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      font: '500 12px/1.3 var(--font-body)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-muted)'
    }
  }, label) : null, token ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      font: '400 10px/1.3 var(--font-mono)',
      color: 'var(--text-faint)'
    }
  }, token) : null);
}

/* Reveal — entrance fade + 12px rise via CSS (see .reveal in page.css).
   Always ends visible; never depends on JS effects firing. */
function Reveal({
  children,
  delay = 0,
  as = 'div',
  className,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: 'reveal' + (className ? ' ' + className : ''),
    style: {
      animationDelay: `${delay}ms`,
      ...style
    }
  }, rest), children);
}

/* SectionShell — consistent section padding + max width + eyebrow header.
   Intros are kept short and subtle — small, muted, low word-count. */
function SectionShell({
  id,
  index,
  eyebrow,
  title,
  intro,
  children
}) {
  const {
    Eyebrow
  } = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: '88px var(--gutter-lg) 96px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, {
    index: index,
    style: {
      fontSize: 16
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 0',
      font: '500 clamp(28px, 4vw, 42px)/1.08 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      maxWidth: '18ch'
    }
  }, title) : null, intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      maxWidth: '52ch',
      lineHeight: 1.55
    }
  }, intro) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52
    }
  }, children));
}

/* Footer — minimal, hairline top border. */
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      padding: '40px var(--gutter-lg)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, "Hasan", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-600)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "Mechatronics engineer \xB7 videographer \xB7 Leadership"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "\xA9 2026"));
}

/* Refresh Lucide icons after any render that adds new [data-lucide] nodes. */
function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
Object.assign(window, {
  PhotoSlot,
  Reveal,
  SectionShell,
  SiteFooter,
  useLucide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* global React, Reveal */
// Contact — minimal: email, LinkedIn, GitHub, location.

function Contact() {
  const {
    Button
  } = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  const links = [{
    icon: 'mail',
    label: 'Email',
    value: '[[EMAIL]]',
    href: 'mailto:[[EMAIL]]'
  }, {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: '[[LINKEDIN]]',
    href: '[[LINKEDIN]]'
  }, {
    icon: 'github',
    label: 'GitHub',
    value: '[[GITHUB]]',
    href: '[[GITHUB]]'
  }, {
    icon: 'map-pin',
    label: 'Location',
    value: 'Amman, Jordan',
    href: null
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--aurora)'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '120px var(--gutter-lg)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 24
    }
  }, "\u2014 Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '500 clamp(40px, 6vw, 72px)/1.02 var(--font-display)',
      letterSpacing: 'var(--tracking-tighter)',
      color: 'var(--text-strong)',
      maxWidth: '16ch'
    }
  }, "Let's build something", /*#__PURE__*/React.createElement("br", null), "worth shooting."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '48ch',
      lineHeight: 1.6
    }
  }, "Open to engineering roles, collaborations, and videography work. The fastest way to reach me is email.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 0,
      marginTop: 64,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l.label,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(ContactLink, {
    link: l,
    last: i === links.length - 1
  }))))));
}
function ContactLink({
  link
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!link.href;
  const Tag = interactive ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: link.href || undefined,
    target: interactive ? '_blank' : undefined,
    rel: interactive ? 'noreferrer' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      cursor: interactive ? 'pointer' : 'default',
      padding: '28px 24px 28px 0',
      borderBottom: '1px solid var(--border-hairline)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": link.icon,
    style: {
      width: 18,
      height: 18,
      color: hover && interactive ? 'var(--accent-400)' : 'var(--text-muted)',
      transition: 'color var(--dur-base)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, link.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-md)/1.3 var(--font-display)',
      color: hover && interactive ? 'var(--accent-400)' : 'var(--text-strong)',
      wordBreak: 'break-word',
      transition: 'color var(--dur-base)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, link.value, interactive ? /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? 'translate(2px,-2px)' : 'none',
      transition: 'transform var(--dur-base)',
      color: 'var(--text-faint)'
    }
  }, "\u2197") : null));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Engineering.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, SectionShell, Reveal */
// Engineering — Education, Work Experience, Projects.

function Engineering() {
  const {
    ProjectCard,
    Tag
  } = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  const work = [{
    role: 'IoT / Embedded Systems Intern',
    org: 'Nexus Nature',
    meta: 'GJU spinoff · Current',
    desc: 'Embedded & IoT systems for environmental monitoring.',
    current: true
  }, {
    role: 'Engineering Intern',
    org: 'Al-Taqadum Modern Company',
    meta: 'Industrial commissioning',
    desc: 'Assembly & commissioning of a 16-meter film-blowing machine.',
    current: false
  }];
  const projects = [{
    title: 'Ball-on-Plate Balancing System',
    desc: 'Closed-loop LQR control with live OpenCV ball tracking.',
    tags: ['LQR', 'OpenCV', 'Arduino'],
    href: '[[GITHUB_BALL_ON_PLATE]]',
    action: 'View on GitHub'
  }, {
    title: 'YOLOv11 PCB Defect Detection',
    desc: 'Custom object detection at 83.4% mAP, vs. an autoencoder baseline.',
    tags: ['YOLOv11', 'Roboflow', 'PyTorch'],
    href: '[[GITHUB_PCB_YOLO]]',
    action: 'View on GitHub'
  }, {
    title: 'Gesture-Based Access Control',
    desc: 'Hand-gesture industrial access via myRIO, PLC & MediaPipe.',
    tags: ['myRIO', 'Delta PLC', 'MediaPipe'],
    href: '[[GITHUB_GESTURE_PLC]]',
    action: 'View on GitHub'
  }, {
    title: 'Aqua-Link — LoRa Tank Monitor',
    desc: 'Long-range water-tank level monitoring over LoRa.',
    tags: ['LoRa', 'IoT', 'Embedded C'],
    href: '[[GITHUB_AQUALINK]]',
    action: 'View on GitHub'
  }, {
    title: 'Lane Detection — Unmarked Roads',
    desc: 'Vision lane detection tuned for unmarked Jordanian roads.',
    tags: ['OpenCV', 'Computer Vision'],
    href: '[[GITHUB_LANE_DETECTION]]',
    action: 'View on GitHub'
  }, {
    title: 'AAAI Jordan Chapter Website',
    desc: 'Designed & built the chapter site, live on a custom domain.',
    tags: ['HTML/CSS/JS', 'GitHub Pages'],
    href: '[[LIVE_AAAI_SITE]]',
    action: 'Visit site'
  }, {
    title: 'Innovation Club Website',
    desc: 'The GJU Innovation Club site in clean vanilla JS.',
    tags: ['Vanilla JS', 'Static Site'],
    href: '[[LIVE_INNOVATION_SITE]]',
    action: 'Visit site'
  }, {
    title: 'Dukkan — Shop Management',
    desc: 'Arabic RTL shop app with Google Sheets sync & multi-branch login.',
    tags: ['RTL', 'Sheets API'],
    href: '[[GITHUB_DUKKAN]]',
    action: 'View on GitHub'
  }, {
    title: 'Arduino Car Security System',
    desc: 'Tinkercad sim with voltage-divider sensing & arming logic.',
    tags: ['Arduino', 'Tinkercad'],
    href: '[[GITHUB_CAR_SECURITY]]',
    action: 'View on GitHub'
  }];
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "engineering",
    index: "01",
    eyebrow: "Engineering",
    title: "Systems that see, decide, and move.",
    intro: /*#__PURE__*/React.createElement(React.Fragment, null, "Robotics, control, computer vision, and embedded / IoT", /*#__PURE__*/React.createElement("br", null), "from balancing rigs to industrial commissioning.")
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 24,
      padding: '22px 0',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-label",
    style: {
      marginBottom: 12
    }
  }, "Education"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-xl)/1.2 var(--font-display)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "B.Sc. Mechatronics Engineering"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, "German Jordanian University (GJU)")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-md)/1 var(--font-display)',
      color: 'var(--text-accent)'
    }
  }, "Expected 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-label",
    style: {
      marginBottom: 24
    }
  }, "Work Experience")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, work.map((w, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: w.org,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 32,
      padding: '28px 0',
      borderTop: '1px solid var(--border-faint)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 var(--text-md)/1.2 var(--font-display)',
      color: 'var(--text-strong)'
    }
  }, w.org), w.current ? /*#__PURE__*/React.createElement(Tag, {
    variant: "accent",
    size: "sm"
  }, "Current") : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-md)/1.2 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, w.role), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-faint)',
      marginTop: 4,
      letterSpacing: 'var(--tracking-wide)'
    }
  }, w.meta), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)',
      margin: '10px 0 0',
      lineHeight: 1.55,
      maxWidth: '52ch'
    }
  }, w.desc))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Selected Projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-faint)'
    }
  }, projects.length, " projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 20
    }
  }, projects.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.title,
    delay: i % 3 * 80
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p, {
    index: String(i + 1).padStart(2, '0')
  })))))));
}
Object.assign(window, {
  Engineering
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Engineering.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Landing.jsx
try { (() => {
/* global React, Reveal */
// Landing — centered, photo-less hero with the three destinations on the same
// screen. The "about" + snapshot detail sits below, for those who scroll.

function Landing({
  onNavigate
}) {
  const {
    Eyebrow
  } = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  const entries = [{
    key: 'Engineering',
    label: 'Engineering',
    desc: 'Robotics, control & computer vision.',
    icon: 'cpu'
  }, {
    key: 'Videography',
    label: 'Videography',
    desc: 'Cinematic production & color.',
    icon: 'clapperboard'
  }, {
    key: 'Leadership',
    label: 'Leadership',
    desc: 'Communities, events & AI.',
    icon: 'users'
  }];
  const snapshot = [{
    k: 'Education',
    v: 'B.Sc. Mechatronics — GJU, 2026'
  }, {
    k: 'Now',
    v: 'IoT / Embedded Engineer — Nexus Nature'
  }, {
    k: 'Leadership',
    v: 'President — GJU Innovation Club'
  }, {
    k: 'Videography',
    v: '7 yrs · 30M+ subscribers reached'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: 'calc(100vh - var(--nav-height))',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '64px var(--gutter-lg) 56px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    accent: true
  }, "Mechatronics \xB7 Robotics \xB7 AI Vision"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '22px 0 0',
      font: '500 clamp(44px, 8vw, 92px)/1.0 var(--font-display)',
      letterSpacing: 'var(--tracking-tighter)',
      color: 'var(--text-strong)'
    }
  }, "Hasan Abuzaid", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-600)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px auto 0',
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '40ch',
      lineHeight: 1.55,
      textWrap: 'balance'
    }
  }, "I build systems that see, decide, and move \u2014 and I tell stories with a camera.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 'var(--container-max)',
      marginTop: 'clamp(40px, 6vh, 72px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, entries.map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: e.key,
    delay: 120 + i * 90
  }, /*#__PURE__*/React.createElement(EntryCard, {
    entry: e,
    onNavigate: onNavigate
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--sunken",
    style: {
      padding: '88px var(--gutter-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-label",
    style: {
      marginBottom: 18
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 clamp(20px, 2.4vw, 28px)/1.45 var(--font-display)',
      color: 'var(--text-primary)',
      maxWidth: 'var(--container-narrow)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Final-semester Mechatronics engineer at GJU \u2014 with seven years of professional videography behind the engineering.")), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      marginTop: 48,
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, snapshot.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    style: {
      padding: '22px 22px 22px 0',
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-faint)',
      paddingLeft: i === 0 ? 0 : 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 10px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, s.k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9,
      font: 'var(--type-body-sm)',
      color: 'var(--text-primary)',
      lineHeight: 1.4
    }
  }, s.v))))))));
}
function EntryCard({
  entry,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "entry-card",
    href: `${entry.key.toLowerCase()}.html`,
    onClick: ev => {
      ev.preventDefault();
      onNavigate(entry.key);
    },
    style: {
      textDecoration: 'none',
      textAlign: 'left',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '22px 22px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      transition: 'border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "entry-card__icon",
    "data-lucide": entry.icon,
    style: {
      width: 22,
      height: 22,
      color: 'var(--text-muted)',
      transition: 'color var(--dur-base)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "entry-card__arrow",
    style: {
      font: '500 18px/1',
      color: 'var(--text-faint)',
      transition: 'color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-lg)/1.1 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)'
    }
  }, entry.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '7px 0 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, entry.desc)));
}
Object.assign(window, {
  Landing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Leadership.jsx
try { (() => {
/* global React, SectionShell, Reveal, PhotoSlot */
// Leadership — short intro, position cards, then events (each with its own photo).

function Leadership() {
  const positions = [{
    role: 'President',
    org: 'GJU Innovation Club',
    meta: "GJU's largest club — 1,500+ members, 20-person board.",
    icon: 'users-round'
  }, {
    role: 'Chairman',
    org: 'AAAI GJU Chapter',
    meta: 'The student chapter for AI, in Jordan.',
    icon: 'brain-circuit'
  }];
  const events = [{
    name: 'Passionate Innovators',
    note: 'Flagship innovation showcase',
    token: '[[PHOTO_EVENT_1]]'
  }, {
    name: 'Expert on Campus',
    note: 'Speaker series',
    token: '[[PHOTO_EVENT_2]]'
  }, {
    name: 'GJU Career Fair · 15th ed.',
    note: 'With DI-TECH',
    token: '[[PHOTO_EVENT_3]]'
  }, {
    name: 'Industrial Partnership Conf.',
    note: 'Industry × academia',
    token: '[[PHOTO_EVENT_4]]'
  }, {
    name: 'Inter-University Machine League',
    note: 'Initiative',
    token: '[[PHOTO_EVENT_5]]'
  }, {
    name: 'Conferences & courses',
    note: 'Run under the club',
    token: '[[PHOTO_EVENT_6]]'
  }];
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "leadership",
    index: "03",
    eyebrow: "Leadership",
    title: "Leading the people behind the work.",
    intro: "President of GJU's Innovation Club and Chairman of its AAAI chapter building bridges between students, industry, and AI."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, positions.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.org,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(PositionCard, {
    p: p
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Events initiated & organized"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-faint)'
    }
  }, events.length))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 18
    }
  }, events.map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: e.name,
    delay: i % 3 * 70
  }, /*#__PURE__*/React.createElement(EventCard, {
    e: e
  }))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(ClubLink, null))));
}
function PositionCard({
  p
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '24px 22px',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...(hover ? {
        borderColor: 'var(--accent-600)',
        boxShadow: 'var(--glow-soft)'
      } : {})
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--accent-tint)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon,
    style: {
      width: 20,
      height: 20,
      color: 'var(--accent-400)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: '500 var(--text-lg)/1.15 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)'
    }
  }, p.org), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, p.meta));
}
function EventCard({
  e
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...(hover ? {
        borderColor: 'var(--accent-600)',
        boxShadow: 'var(--glow-soft)',
        transform: 'translateY(-2px)'
      } : {})
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    token: e.token,
    ratio: "16 / 10",
    icon: "image",
    rounded: "0",
    style: {
      border: 'none',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-base)/1.25 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-faint)',
      marginTop: 4
    }
  }, e.note)));
}
function ClubLink() {
  const {
    Button
  } = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  return /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "[[INNOVATION_CLUB_WEBSITE_URL]]",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2197")
  }, "Innovation Club website");
}
Object.assign(window, {
  Leadership
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Leadership.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Videography.jsx
try { (() => {
/* global React, SectionShell, Reveal, PhotoSlot */
// Videography — intro + reach, brands, YouTubers, video showcase.

function Videography() {
  const {
    Stat,
    VideoFacade
  } = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  const brands = [{
    token: '[[BRAND_1]]',
    name: 'Brand One',
    desc: 'Full content strategy, videography, and photography.'
  }, {
    token: '[[BRAND_2]]',
    name: 'Brand Two',
    desc: 'Campaign production and post — concept to color.'
  }];
  const youtubers = [{
    token: '[[YOUTUBER_1]]',
    handle: '@creator-one'
  }, {
    token: '[[YOUTUBER_2]]',
    handle: '@creator-two'
  }, {
    token: '[[YOUTUBER_3]]',
    handle: '@creator-three'
  }, {
    token: '[[YOUTUBER_4]]',
    handle: '@creator-four'
  }, {
    token: '[[YOUTUBER_5]]',
    handle: '@creator-five'
  }];

  // Placeholder IDs — replace with [[YT_VIDEO_ID_1..5]]. Vertical reels / shorts.
  const videos = [{
    id: '[[YT_SHORT_ID_1]]',
    title: 'Brand reel'
  }, {
    id: '[[YT_SHORT_ID_2]]',
    title: 'Creator short'
  }, {
    id: '[[YT_SHORT_ID_3]]',
    title: 'Launch teaser'
  }, {
    id: '[[YT_SHORT_ID_4]]',
    title: 'Event recap'
  }, {
    id: '[[YT_SHORT_ID_5]]',
    title: 'Montage'
  }];
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "videography",
    index: "02",
    eyebrow: "Videography",
    title: "Shot like cinema.",
    intro: /*#__PURE__*/React.createElement(React.Fragment, null, "Seven years of production and editing", /*#__PURE__*/React.createElement("br", null), "A full Adobe post pipeline, including color.")
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 0'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "30M+",
    label: "Subscribers reached"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 0 28px 28px',
      borderLeft: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "150M+",
    label: "Accumulated views"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 0 28px 28px',
      borderLeft: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "7 yrs",
    label: "Since 2019"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-label",
    style: {
      marginBottom: 24
    }
  }, "Brands")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, brands.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: b.token,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    token: b.token,
    ratio: "1 / 1",
    icon: "building-2",
    rounded: "var(--radius-sm)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--text-md)/1.2 var(--font-display)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: '8px 0 0',
      lineHeight: 1.55
    }
  }, b.desc))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-label",
    style: {
      marginBottom: 24
    }
  }, "Creators \xB7 30M+ combined subscribers")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 16
    }
  }, youtubers.map((y, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: y.token,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    token: y.token,
    ratio: "1 / 1",
    icon: "user-round",
    rounded: "var(--radius-pill)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, y.handle)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-label",
    style: {
      marginBottom: 22
    }
  }, "Reels & shorts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
      gap: 16
    }
  }, videos.map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: v.title,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(ShowcaseTile, {
    v: v
  }))))));
}
function ShowcaseTile({
  v
}) {
  const {
    VideoFacade
  } = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  const valid = v.id && !v.id.startsWith('[[');
  if (valid) return /*#__PURE__*/React.createElement(VideoFacade, {
    videoId: v.id,
    title: v.title,
    ratio: "9 / 16"
  });
  // Placeholder vertical facade until a real reel id is supplied.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '9 / 16',
      borderRadius: 'var(--radius-md)',
      border: '1px dashed var(--border-strong)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, var(--ink-750), var(--ink-850))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--aurora)',
      opacity: 0.5
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10,12,16,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      marginLeft: 3,
      borderLeft: '12px solid var(--text-muted)',
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      font: '500 12px/1.3 var(--font-body)',
      color: 'var(--text-secondary)',
      textAlign: 'center',
      padding: '0 8px'
    }
  }, v.title));
}
Object.assign(window, {
  Videography
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Videography.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Shared building blocks for the Hasan Abuzaid portfolio UI kit.
// All real product surfaces compose these + the design-system components.

/* PhotoSlot — elegant placeholder for user-supplied imagery. Shows a labelled
   slot with the brief's [[PLACEHOLDER]] token so assets can be dropped in.
   The brand has no shipped photography yet, so the kit renders these. */
function PhotoSlot({
  token,
  label,
  ratio = '4 / 3',
  icon = 'image',
  rounded = 'var(--radius-md)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      borderRadius: rounded,
      border: '1px dashed var(--border-strong)',
      background: 'linear-gradient(135deg, var(--ink-750), var(--ink-800))',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--aurora)',
      opacity: 0.5
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22,
      color: 'var(--text-faint)',
      position: 'relative'
    }
  }), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      font: '500 12px/1.3 var(--font-body)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-muted)'
    }
  }, label) : null, token ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      font: '400 10px/1.3 var(--font-mono)',
      color: 'var(--text-faint)'
    }
  }, token) : null);
}

/* Reveal — entrance fade + 12px rise via CSS (see .reveal in page.css).
   Always ends visible; never depends on JS effects firing. */
function Reveal({
  children,
  delay = 0,
  as = 'div',
  className,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: 'reveal' + (className ? ' ' + className : ''),
    style: {
      animationDelay: `${delay}ms`,
      ...style
    }
  }, rest), children);
}

/* SectionShell — consistent section padding + max width + eyebrow header.
   Intros are kept short and subtle — small, muted, low word-count. */
function SectionShell({
  id,
  index,
  eyebrow,
  title,
  intro,
  children
}) {
  const {
    Eyebrow
  } = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: '88px var(--gutter-lg) 96px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, {
    index: index,
    style: {
      fontSize: 16
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 0',
      font: '500 clamp(28px, 4vw, 42px)/1.08 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      maxWidth: '18ch'
    }
  }, title) : null, intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      maxWidth: '52ch',
      lineHeight: 1.55
    }
  }, intro) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52
    }
  }, children));
}

/* Footer — minimal, hairline top border. */
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      padding: '40px var(--gutter-lg)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, "Hasan", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-600)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "Mechatronics engineer \xB7 videographer \xB7 Amman, Jordan"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "\xA9 2026"));
}

/* Refresh Lucide icons after any render that adds new [data-lucide] nodes. */
function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
Object.assign(window, {
  PhotoSlot,
  Reveal,
  SectionShell,
  SiteFooter,
  useLucide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/shell.jsx
try { (() => {
/* global React, ReactDOM */
// Shared multi-page shell. Each section is its own static page; the NavBar
// links navigate between them. mountPage(sectionName, activeTab) boots a page.

const PAGE_MAP = {
  Home: 'index.html',
  Engineering: 'engineering.html',
  Videography: 'videography.html',
  Leadership: 'leadership.html',
  Contact: 'contact.html'
};
function PageShell({
  Section,
  active,
  accentClass
}) {
  const NS = window.HasanAbuzaidPortfolioDesignSystem_4b31b8;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Set the per-page accent class on <body> so the aurora picks up the tint.
  React.useEffect(() => {
    document.body.classList.add(accentClass);
    return () => document.body.classList.remove(accentClass);
  }, [accentClass]);

  // Refresh Lucide icons whenever the tree changes.
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const navigate = item => {
    const href = PAGE_MAP[item] || 'index.html';
    if (href !== location.pathname.split('/').pop()) window.location.href = href;
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NS.NavBar, {
    active: active,
    scrolled: scrolled,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    onNavigate: navigate
  })), /*#__PURE__*/React.createElement(window.SiteFooter, {
    onNavigate: navigate
  }));
}
function mountPage(sectionName, active, accentClass) {
  const isReady = () => !!(window.HasanAbuzaidPortfolioDesignSystem_4b31b8 && window[sectionName] && window.SiteFooter && window.NS_KIT_READY !== false);
  function Boot() {
    const [ready, setReady] = React.useState(isReady());
    React.useEffect(() => {
      if (ready) return;
      const t = setInterval(() => {
        if (isReady()) {
          setReady(true);
          clearInterval(t);
        }
      }, 60);
      return () => clearInterval(t);
    }, [ready]);
    if (!ready) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-faint)',
          fontFamily: 'var(--font-body)'
        }
      }, "Loading\u2026");
    }
    return /*#__PURE__*/React.createElement(PageShell, {
      Section: window[sectionName],
      active: active,
      accentClass: accentClass
    });
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Boot, null));
}
window.mountPage = mountPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.VideoFacade = __ds_scope.VideoFacade;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
