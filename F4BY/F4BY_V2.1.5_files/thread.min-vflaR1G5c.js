define(["require","exports","tslib","react","classnames","spectrum/tertiary_link","spectrum/tooltip","comments2/components/comment","comments2/components/thread/thread_editor","prop-types","comments2/components/comment_editor/draft_utils","comments2/components/comment_utils"],function(e,t,o,n,r,i,s,a,d,c,l,m){"use strict";function u(e,t){return{onDeleted:function(){return t.onCommentDeleted(e.id)},onEdited:function(o){return t.onCommentEdited(e.id,o)},onMentionsQueryUpdated:t.onMentionsQueryUpdated,onClickTimeCode:t.onClickTimeCode,onClickOlderInfo:t.onClickOlderInfo}}Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importStar(n),r=o.__importDefault(r),c=o.__importStar(c);var h=function(){},p=function(e,t){var o=t.localization,r=e.count,i=o.threadCollapsedCommentsText(r);return n.createElement("div",{className:"sc-thread-comment-number"},i)};p.contextTypes={localization:c.object};var f={type:"no_details"},v=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.state={isEditorEmpty:!0,isEditorFocused:!1,shouldFocusThreadEditor:!1},t.ref=null,t.onFocusEditor=function(){return t.setState({isEditorFocused:!0})},t.onBlurEditor=function(){return t.setState({isEditorFocused:!1})},t.onClick=function(){var e=t.props;(0,e.onThreadInteractedWith)(e.thread)},t.handleKeyDown=function(e){13===e.which&&t.onClick()},t.onEditorStateChange=function(e){l.hasFocus(e)&&t.props.actions.onEditorFocused(),t.props.actions.onEditorStateChange(e),t.setState({isEditorEmpty:l.contentIsEmpty(e)})},t.setRef=function(e){t.ref=e},t.renderMarkedAsResolved=function(e){var o,r,i=t.localization,a="with_details"===e.type&&e;return a&&i.markedAsResolvedByUserLabel&&i.getActingTime?(o=i.markedAsResolvedByUserLabel(a.resolver.name.display),r=i.getActingTime(a.resolvedTimestamp)):(o=i.markedAsResolvedLabel,r=i.markedAsResolvedLabel),n.createElement(s.Tooltip,{positioning:"above",tooltipContent:r},n.createElement("div",{className:"sc-thread-controls-resolved-note"},o))},t.getResolvedInfo=function(e){var t=e.resolvedInfo,o=e.resolved;return t?t:o?f:void 0},t}return o.__extends(t,e),Object.defineProperty(t.prototype,"localization",{get:function(){return this.context.localization},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){this.props.active&&this.scrollToThread(!1)},t.prototype.componentDidUpdate=function(e){if(this.props.active&&!e.active){var t=this.props.streamSettings.canComment;this.scrollToThread(t)}else!this.props.active&&e.active&&this.setState({isEditorFocused:!1,shouldFocusThreadEditor:!1})},t.prototype.scrollToThread=function(e){var t=this,o=this.props.scrollToElem,n=this.ref;n&&o&&o(n).then(function(){t.ref&&t.setState({shouldFocusThreadEditor:e})})},Object.defineProperty(t.prototype,"innerRef",{get:function(){return this.ref},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeOrEditorHasText",{get:function(){return this.props.active||!this.state.isEditorEmpty},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"className",{get:function(){var e=this.props,t=e.className,o=void 0===t?"":t,n=e.thread,i=e.isMobile,s=e.focused,a=n.resolved||n.resolvedInfo;return r.default(o,{"sc-thread":!0,"sc-thread-active":this.activeOrEditorHasText,"sc-thread-inactive":!this.activeOrEditorHasText,"sc-thread-read":n.read,"sc-thread-unread":!n.read,"sc-thread-resolved":a,"sc-thread-unresolved":!a,"sc-thread-mobile":i,"sc-thread-focused":s,"sc-thread-editor-is-focused":this.state.isEditorFocused})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filteredReplies",{get:function(){return this.props.thread.comments.slice(1).filter(function(e){return!e.deleted})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"includeEditor",{get:function(){var e=this.props,t=e.streamSettings,o=e.isMobile;return t.canShowEditor&&!o},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDisabled",{get:function(){return!!this.props.thread.pending},enumerable:!0,configurable:!0}),t.prototype.renderComment=function(e,t,o,r){void 0===o&&(o=a.Comment);var i=this.props,s=i.actions,d=i.editedComment,c=i.mentionsMatches,l=i.onStartEdit,h=i.onEndEdit,p=i.isMobile,f=i.showRevisionInfo,v=!!d&&e.id===d.id;return t||(e=m.truncateComment(e)),n.createElement(o,{actions:u(e,s),active:t,annotation:r,comment:e,key:e.id,isEditing:v,onStartEdit:l,onEndEdit:h,mentionsMatches:c,isMobile:p,showRevisionInfo:f})},t.prototype.renderReadToggle=function(){var e=this.localization,t=this.props,o=t.actions,r=t.thread,a=r.read?o.onMarkAsUnread:o.onMarkAsRead,d=r.read?e.markAsUnreadLabel:e.markAsReadLabel;return n.createElement(s.Tooltip,{positioning:"above",tooltipContent:d},n.createElement(i.TertiaryLink,{className:"sc-thread-toggle",onClick:a,disabled:this.isDisabled},d))},t.prototype.renderToplineControls=function(){var e=this.localization,t=this.props,o=t.streamSettings,r=t.isMobile,a=t.actions,d=t.thread,c=this.activeOrEditorHasText;if(r)return null;var l=c&&o.canModifyThreads,m=this.getResolvedInfo(d);return m?n.createElement("div",{className:"sc-thread-controls"},this.renderMarkedAsResolved(m),l&&n.createElement(s.Tooltip,{positioning:"above",tooltipContent:e.threadRestoreLabel},n.createElement(i.TertiaryLink,{className:"sc-thread-toggle",disabled:this.isDisabled,onClick:a.onUnresolve},e.threadRestoreLabel))):l?n.createElement("div",{className:"sc-thread-controls"},this.renderReadToggle(),n.createElement(s.Tooltip,{positioning:"above",tooltipContent:e.threadResolveLabel},n.createElement(i.TertiaryLink,{className:"sc-thread-toggle",onClick:a.onResolve,disabled:this.isDisabled},e.threadResolveLabel))):null},t.prototype.renderActive=function(){var e=this,t=this.localization,o=this.props,r=o.actions,i=r.onMentionsQueryUpdated,s=r.onMouseEnter,c=r.onMouseLeave,l=r.onReply,m=o.commentComponent,u=o.mentionsMatches,h=o.stickerPacks,p=o.onCancel,f=o.thread,v=o.user,E=this.filteredReplies;return n.createElement("li",{onMouseEnter:s,onMouseLeave:c,className:this.className,tabIndex:0,role:"button","aria-expanded":!0,"aria-label":f.read?t.a11yCommentThreadLabel:t.a11yUnreadCommentThreadLabel,ref:this.setRef,onClick:this.onClick},this.renderToplineControls(),n.createElement("ul",{className:"sc-thread-comments"},this.renderComment(f.comments[0],this.activeOrEditorHasText,m,f.annotation),E.map(function(t){return e.renderComment(t,!0,a.Comment)})),this.includeEditor&&n.createElement(d.ThreadEditor,{author:v,disabled:this.isDisabled,shouldFocus:this.state.shouldFocusThreadEditor,mentionsMatches:u,onCancel:p,onEditorStateChange:this.onEditorStateChange,onMentionsQueryUpdated:i,onPost:l,onFocus:this.onFocusEditor,onBlur:this.onBlurEditor,stickerPacks:h}))},t.prototype.renderInactive=function(){var e=this.localization,t=this.props,o=t.actions,r=o.onMouseEnter,i=o.onMouseLeave,s=o.onFocus,d=o.onBlur,c=t.active,l=t.commentComponent,u=void 0===l?a.Comment:l,f=t.mentionsMatches,v=t.thread,E=t.isMobile,b=t.showRevisionInfo,y=this.filteredReplies;return n.createElement("li",{className:this.className,tabIndex:0,"aria-label":v.read?e.a11yCommentThreadLabel:e.a11yUnreadCommentThreadLabel,role:"button","aria-expanded":!1,onClick:this.onClick,onKeyDown:this.handleKeyDown,onMouseEnter:r,onMouseLeave:i,onFocus:s,onBlur:d,ref:this.setRef},this.renderToplineControls(),n.createElement("ul",{className:"sc-thread-comments"},this.renderComment(v.comments[0],c,u,v.annotation),y.length>1&&n.createElement(p,{count:y.length-1}),y.length>0&&n.createElement(a.Comment,{active:!1,comment:m.truncateComment(y[y.length-1]),actions:{onClickTimeCode:h,onDeleted:h,onEdited:h,onMentionsQueryUpdated:h,onClickOlderInfo:h},mentionsMatches:f,onEndEdit:h,onStartEdit:h,isEditing:!1,isMobile:E,showRevisionInfo:b})),this.includeEditor&&n.createElement("div",{className:"sc-thread-reply-hint"},this.localization.replyHintLabel||"Reply…"))},t.prototype.render=function(){return this.props.thread.comments.every(function(e){return!!e.deleted})?null:this.activeOrEditorHasText?this.renderActive():this.renderInactive()},t})(n.PureComponent);t.Thread=v,v.contextTypes={localization:c.object}});
//# sourceMappingURL=thread.min.js-vflwmuEnD.map