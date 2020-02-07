import { Vector3 } from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import ModelViewerElementBase from '../model-viewer-base.js';
import { Constructor } from '../utilities.js';
/**
 * Hotspots are configured by slot name, and this name must begin with "hotspot"
 * to be recognized. The position and normal strings are in the form of the
 * camera-target attribute and default to "0m 0m 0m" and "0m 1m 0m",
 * respectively.
 */
interface HotspotConfiguration {
    name: string;
    position?: string;
    normal?: string;
}
/**
 * The Hotspot object is a reference-counted slot. If decrement() returns true,
 * it should be removed from the tree so it can be garbage-collected.
 */
export declare class Hotspot extends CSS2DObject {
    normal: Vector3;
    private referenceCount;
    constructor(config: HotspotConfiguration);
    /**
     * Call this when adding elements to the same slot to keep track.
     */
    increment(): void;
    /**
     * Call this when removing elements from the slot; returns true when the slot
     * is unused.
     */
    decrement(): boolean;
    /**
     * Change the position of the hotspot to the input string, in the same format
     * as the data-position attribute.
     */
    updatePosition(position?: string): void;
    /**
     * Change the hotspot's normal to the input string, in the same format as the
     * data-normal attribute.
     */
    updateNormal(normal?: string): void;
}
export declare interface AnnotationInterface {
    updateHotspot(config: HotspotConfiguration): void;
}
/**
 * AnnotationMixin implements a declarative API to add hotspots and annotations.
 * Child elements of the <model-viewer> element that have a slot name that
 * begins with "hotspot" and data-position and data-normal attributes in
 * the format of the camera-target attribute will be added to the scene and
 * track the specified model coordinates.
 */
export declare const AnnotationMixin: <T extends Constructor<ModelViewerElementBase, object>>(ModelViewerElement: T) => {
    new (...args: any[]): AnnotationInterface;
    prototype: AnnotationInterface;
} & object & T;
export {};
