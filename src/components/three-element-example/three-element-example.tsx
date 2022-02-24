import { Component, Host, h } from '@stencil/core';
import 'three-elements';
@Component({
  tag: 'three-element-example',
  styleUrl: 'three-element-example.css',
  shadow: true,
})
export class ThreeElementExample {
  render() {
    return (
      <Host>
        <three-game autorender>
          <three-scene background-color="#eee">
            <three-mesh scale="4" tick="object.rotation.x = object.rotation.y += 0.01">
              <three-dodecahedron-buffer-geometry></three-dodecahedron-buffer-geometry>
              <three-mesh-standard-material
                color="hotpink"
                metalness="0.5"
                roughness="0.5"
              ></three-mesh-standard-material>
            </three-mesh>

            <three-ambient-light intensity="0.2"></three-ambient-light>
            <three-directional-light intensity="0.8" position="10, 40, 50" cast-shadow></three-directional-light>
          </three-scene>
        </three-game>
      </Host>
    );
  }
}
