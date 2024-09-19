import {MenuItemCard} from "@/app/business-listing/MenuItemCard";
import {Section} from "@/app/utils/models/section/section.validator";
import {fetchMenuItemByItemSectionId} from "@/app/utils/models/items/item.model";


type MenuSectionProps = {
    section: Section
}

export async function MenuSection(props: MenuSectionProps) {
    const section = props.section

    const items = await fetchMenuItemByItemSectionId(section?.sectionId ?? '')

    return(
        <>
            <div className='overflow-x-auto'>
                <h3 className='text-2xl'>{section.sectionName}</h3>
                <div className='flex gap-3'>
                    {items.map(item => <MenuItemCard key={item.itemSectionId} item={item}/>)}
                </div>
            </div>
        </>
    )
}