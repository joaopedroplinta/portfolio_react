declare module "*.css";

declare namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any; // ou você pode definir um tipo mais específico se souber
    }
  }