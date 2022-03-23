import type { IconLibrary } from '../library';

const library: IconLibrary = {
  name: 'bootstrap',
  resolver: name =>
    `https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/icons/${name}.svg`,
};

export default library;
