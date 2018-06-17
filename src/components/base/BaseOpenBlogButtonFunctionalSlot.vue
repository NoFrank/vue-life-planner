<!-- example of a functional component with a slot. Slots are a great
way to allow parent components to dynamically fill parts of a generic
component, without the need for a more complex api.
Notice, that this component doesn't define any JS-Script at all. It
consists solely off a template with the functional-attribute.
-->
<template functional>
    <!-- A functional component has no state and props can not be accessed
    via 'this' -->
    <b-button variant="primary" :block="true" @click="listeners['click'](props.title)">
      <!-- the inner content will be defined in the parent component via slot -->
      Open <slot/>
    </b-button>
</template>
