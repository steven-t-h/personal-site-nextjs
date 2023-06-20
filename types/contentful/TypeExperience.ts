import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeExperienceFields {
  name: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  logo: EntryFieldTypes.AssetLink
  level: EntryFieldTypes.Integer<1 | 2 | 3>
  position: EntryFieldTypes.Integer
}

export type TypeExperienceSkeleton = EntrySkeletonType<TypeExperienceFields, 'experience'>
export type TypeExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeExperienceSkeleton,
  Modifiers,
  Locales
>
