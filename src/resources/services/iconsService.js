import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// have to import icon with deep imports because of treeshaking issue, see https://fontawesome.com/how-to-use/with-the-api/other/tree-shaking
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faAdjust } from '@fortawesome/free-solid-svg-icons/faAdjust';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle';

library.add(
	faExclamationTriangle,
	faCheckCircle,
	faBars,
	faSearch,
	faWrench,
	faPowerOff,
	faUser,
	faChevronRight,
	faAdjust,
	faUserSecret,
	faTimes,
	faCaretRight
);

export default library;
