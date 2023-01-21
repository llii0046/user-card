import { IColor, IDevices, ISize } from '../interfaces/variables';

const sizes: ISize = {
	miniMobile: 320,
	mobile: 576,
	tablet: 768,
	laptop: 1024,
	largeLaptop: 1440,
	desktop: 1920,
	largeDesktop: 2560,
	wideScreen: 3840
};

const devices: IDevices = {
	miniMobile: `(min-width: ${sizes.miniMobile}px)`,
	mobile: `(min-width: ${sizes.mobile}px)`,
	tablet: `(min-width: ${sizes.tablet}px)`,
	laptop: `(min-width: ${sizes.laptop}px)`,
	largeLaptop: `(min-width: ${sizes.largeLaptop}px)`,
	desktop: `(min-width: ${sizes.desktop}px)`,
	largeDesktop: `(min-width: ${sizes.largeDesktop}px)`
};

const color: IColor = {
	textColor: '#202842',
	lightTextColor: '#8C8F97' ,
	shadowColor: '#ECEFF9',
	floatShadow: '#c7c4c4'
};

const headerHeight = '100px';

export { color, devices, headerHeight, sizes };
